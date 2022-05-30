export const SINGLETON_KEY = Symbol();
export type Singleton<T extends new (...args: any[]) => any> = T & {
  [SINGLETON_KEY]: T extends new (...args: any[]) => infer I ? I : never;
};

export const Singleton = <T extends new (...args: any[]) => any>(type: T) =>
  new Proxy(type, {
    // this will hijack the constructor
    construct(target: Singleton<T>, argsList, newTarget) {
      // we should skip the proxy for children of our target class
      if (target.prototype !== newTarget.prototype) {
        return Reflect.construct(target, argsList, newTarget);
      }
      // if our target class does not have an instance, create it
      if (!target[SINGLETON_KEY]) {
        target[SINGLETON_KEY] = Reflect.construct(target, argsList, newTarget);
      }
      // return the instance we created!
      return target[SINGLETON_KEY];
    },
  });

@Singleton
class Store {
  private data: { id: number }[] = [];

  public add(item: { id: number }) {
    this.data.push(item);
  }

  public get(id: number) {
    return this.data.find((d) => d.id === id);
  }
}

const myStore = new Store();
myStore.add({id: 1});
myStore.add({id: 2});
myStore.add({id: 3});

const anotherStore = new Store();
anotherStore.get(2); // returns `{id: 2}`!

console.log(anotherStore.get(2))