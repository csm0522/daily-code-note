/**
 * DEMO: 设计模式之美
 * Required: 
 * 1. 要求每个时刻都可用
 * 2. 要么是状态 a 要么状态 b，不能有中间时态 */

const v2 = {
    a: {
        times: 2098,
        updatedBy: 1653357233
    },
    b: {
        times: 2001,
        updatedBy: 1653357282
    }
}
const v3 = {
    b: {
        times: 2001,
        updatedBy: 1653357282
    },
    c: {
        times: 125,
        updatedBy: 1653397388
    }
}
const v4 = {
    // unchanged
    a: {
        times: 2941,
        updatedBy: 1653367388
    },
    b: {
        times: 1201,
        updatedBy: 1653497388
    },
    d: {
        times: 31,
        updatedBy: 1653497388
    }
}

class ProtoDemo {
    private lastSearchKeyword = {}
    private lastUpdatedBy = -1

    // 自上次刷新以来有更新的 key words
    refresh(updatedFromLastSave: any) {
        let newVersion = { ...this.lastSearchKeyword } // 利用浅拷贝的高效
        let v1 = this.lastSearchKeyword
        let v2 = updatedFromLastSave
        let maxNewUpdatedTime = this.lastUpdatedBy
        // 出现更新则用深拷贝规避引用问题
        for (let props in v2) {
            if (new Date(v2[props].updatedBy) > new Date(this.lastUpdatedBy)) {
                maxNewUpdatedTime = new Date(maxNewUpdatedTime) < new Date(v2[props].updatedBy) ? v2[props].updatedBy : maxNewUpdatedTime
                if (v1.hasOwnProperty(props)) {
                    // 说明有更新
                    newVersion[props] = Object.assign({}, v2[props]) // 这里用深拷贝
                }
                newVersion[props] = v2[props] // 这里用深拷贝
            }
        }
        this.lastUpdatedBy = maxNewUpdatedTime
        this.lastSearchKeyword = newVersion
    }

    showCurrentKeys() {
        console.log(this.lastSearchKeyword)
    }
}

const keywordDatabase = new ProtoDemo()
keywordDatabase.refresh(v2)
keywordDatabase.showCurrentKeys()
keywordDatabase.refresh(v3)
keywordDatabase.showCurrentKeys()
keywordDatabase.refresh(v4)
keywordDatabase.showCurrentKeys()