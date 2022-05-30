interface SaaSBuilder {
  generateFeatureA(): void;
  generateFeatureB(): void;
  generateFeatureC(): void;
  generateVIP(level: number): void;
}

class SaaSPlat {
    vipLevel:number = 1
    constructor(level = 1){
        this.vipLevel = level 
    }
  featureList: string[] = [];
  display(){
      console.log(`this saas platform have these feature: ${this.featureList.join(' , ')} with VIP level = ${this.vipLevel}`)
  }
}

// Concrete Builder 具体的 builder 接口实现
class ActualSaaSBuilder implements SaaSBuilder {
  private saasPlat: SaaSPlat;

  constructor() {
    this.reset();
  }

  reset() {
    this.saasPlat = new SaaSPlat();
  }

  generateFeatureA(): void {
    this.saasPlat.featureList.push("Feature A");
  }

  generateFeatureB(): void {
    this.saasPlat.featureList.push("Feature B");
  }

  generateFeatureC(): void {
    this.saasPlat.featureList.push("Feature C");
  }

  generateVIP(level: number): void {
      this.saasPlat.vipLevel = level
  }

  public getBuildedSaasPlat(){
      const result = this.saasPlat
      this.reset()
      result.display() // debugger code
      return result
  }

}

// 指挥家，指挥建造者最后的组合流程
class Director{
    private builder: ActualSaaSBuilder

    public setBuilder(builder:ActualSaaSBuilder){
        this.builder = builder
    }

    // 构建一个 MVP 版本的应用
    public getMVPSaasApplication(){
        this.builder.generateFeatureA()
    }


    // 构建一个企业级版本的应用
    public getEnterpriseApplication(){
        this.builder.generateFeatureA()
        this.builder.generateFeatureB()
        this.builder.generateFeatureC()
        this.builder.generateVIP(100)
    }

}


const director = new Director()
const builder = new ActualSaaSBuilder()
director.setBuilder(builder)
director.getEnterpriseApplication()
builder.getBuildedSaasPlat()

director.getMVPSaasApplication()
builder.getBuildedSaasPlat()
