/**  
 * simple factory
 * 根据文件后缀获取相应的 parser，将存储在文件里面的配置解析成相应的内存对象 ruleConfig
 *  */
interface IRuleConfigParser {
    parse(text: string): string
}

class RuleConfigSource {
    load(ruleConfigSourcePath: string) {
        const ruleConfigSourceExtension: string = getFileExtendsion(ruleConfigSourcePath)
        // 2 .
        // const parser: IRuleConfigParser = this.createRuleConfigParser(ruleConfigSourceExtension)
        // 1. 可以抽取成 function
        // const parser = null
        // if (ruleConfigSourceExtension.match(/".json"/)) {
        //     parser = new JsonRuleConfigParser()
        // } else if (ruleConfigSourceExtension.match(/".xml"/)) {
        //     parser = new XMLRuleConfigParser()
        // } else if (ruleConfigSourceExtension.match(/".yaml"/)) {
        //     parser = new YAMLRuleConfigParser()
        // } else {
        //     throw new Error('no parser supported')
        // }

        const configText = ''
        return parser.parse(configText)
    }

    /*  2. 让职责单一，可以划分为一个单独的类 */
    //     private createRuleConfigParser(ruleConfigSourceExtension: string) {
    //         const parser = null
    //         if (ruleConfigSourceExtension.match(/".json"/)) {
    //             parser = new JsonRuleConfigParser()
    //         } else if (ruleConfigSourcePath.match(/".xml"/)) {
    //             parser = new XMLRuleConfigParser()
    //         } else if (ruleConfigSourcePath.match(/".yaml"/)) {
    //             parser = new YAMLRuleConfigParser()
    //         }
    //         return parser
    //     }
}

function getFileExtendsion(path: string) {
    return path
}
// simple Factory 
// class RuleConfigFactory {
//     createParser(ruleConfigSourceExtension: string): IRuleConfigParser {

// let parser = null
// if (ruleConfigSourceExtension.match(/".json"/)) {
//     parser = new JsonRuleConfigParser()
// } else if (ruleConfigSourcePath.match(/".xml"/)) {
//     parser = new XMLRuleConfigParser()
// } else if (ruleConfigSourcePath.match(/".yaml"/)) {
//     parser = new YAMLRuleConfigParser()
// }
// return parser
//     }
// }
// 按照多态的方式重构工厂模式
interface IRuleConfigParserFactory {
    createParser(extention: string): IRuleConfigParser
}

class JsonRuleConfigParserFactory implements IRuleConfigParserFactory {
    createParser(extention: string): IRuleConfigParser {
        return new JsonRuleConfigParser()
    }
}
class XMLRuleConfigParserFactory implements IRuleConfigParserFactory {
    createParser(extention: string): IRuleConfigParser {
        return new XMLRuleConfigParser()
    }
}
class YAMLRuleConfigParserFactory implements IRuleConfigParserFactory {
    createParser(extention: string): IRuleConfigParser {
        return new YAMLRuleConfigParser()
    }
}
// simple factory cached
class RuleConfigFactory {
    cachedFactories = {
        "json": new JsonRuleConfigParserFactory(),
        "xml": new XMLRuleConfigParserFactory(),
        'yaml': new YAMLRuleConfigParserFactory()
    }

    createParser(ruleConfigSourceExtension: string): IRuleConfigParser | null {
        if (!ruleConfigSourceExtension) {
            return null
        }
        return this.cachedFactories.hasOwnProperty(`${ruleConfigSourceExtension}`) ? this.cachedFactories[ruleConfigSourceExtension] : null
    }
}


