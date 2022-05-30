class Singleton {
	private static instance: Singleton = new Singleton()
	private constructor() {}

	// 饿汉模式
	public static getInstance(): Singleton {
		return Singleton.instance
	}
}

class SingletonWithLazy {
	private static instance: SingletonWithLazy

	private constructor() {}

	public static getInstance(): SingletonWithLazy {
		// 懒汉模式
		if (!SingletonWithLazy.instance) {
			SingletonWithLazy.instance = new SingletonWithLazy()
		}

		return SingletonWithLazy.instance
	}
}