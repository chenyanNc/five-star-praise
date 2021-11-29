## 安装
```
npm install 
```

## 使用
* 在 需要使用的文件中引入
```
// 引入组件
import JscyUI from "five-start-pralse"

// 引入样式文件
import  "five-start-pralse/style/fiveStart.css"

// 挂载
Vue.use(JscyUI)

```

* 页面中使用

```
    <Starts
      :startQuantity="5"
      :num="0"
      :size="14"
      @getStartNum="getStartNum"
    />
```


## 属性说明
|  Property  |  Deacription  |  type  |  default  |
|  ----  | ----  |  ----  | ----  |
|  startQuantity  |  总星数  |  Number  |  5  |
|  num  |  默认选中的星星数  |  Number  |  0  |
|  size  |  星星的大小  |  Number  |  14  |
|  startColor  |  选中时星星的颜色   | String  |  '#FCC33F'  |
|  @getStartNum  |  点击星星触发的事件   | function  |  默认参数为当前选中星星数  |
