# 后台 API

npm run dev 启动

## url 及端口号

host:127.0.0.1
port:8000

## 数据库

### mongodb 数据库

host:127.0.0.1
port:27071
dbName:test

### 博客文章 API

#### 获取博客文章列表

```
url:
  /blogs/list
method:
  GET
type:
  JSON
params:
  per       每一页显示的数量 number 默认10
  page      当前页码 number 默认1
  keywords  关键词过滤 string[] 默认[]
  series    文章系列过滤 string 默认null
headers:
  authorization Bearer token  需要提供jwt进行验证
return:
{
  statusCode:000
  message:"请求成功"
  result {
    list:[
      {
        id:string            博客id  唯一
        title:string         博客标题
        author:string        博客作者
        content:string       博客内容
        keywords:[           关键词列表
          keyword:string
        ]
        series:string        文章系列
        comments:[           评论
          {
            id               评论者id  唯一
            name             评论者姓名
            content          评论内容
            date             评论时间
          }
        ]
        date:string          创建日期
        updateDate:string    更新日期
        likes:[              赞同列表
          id:string          赞同者id
        ]
        removed:boolean      是否删除  均为false，true表示文章被删除，不会出现在返回结果中
      }
    ]
  }
}
```

返回结果示例

> ```JavaScript
> // result
> {
>   statusCode:"000000",
>   desc:"请求成功",
>   result:{
>     blogList:[
>       {
>         id:"007",
>         title:"示例博客",
>         author:"feline",
>         content:"这是一篇示例博客",
>         keywords:["关键词1","关键词2"],
>         comments:[
>           {
>             id:"01",
>             name:"小明",
>             content:"这是一条示例评论"
>           }
>         ],
>         date:"2020-04-07",
>         updateDate:"2020-06-06",
>         likes:['02','05'],
>         removed:false
>       },
>     ]
>   }
> }
> ```

### 获取博客文章

接口地址：/blogs/detail
请求方式：GET
请求格式：JSON
返回格式：JSON

#### 请求参数

| 参数名 | 必填 | 说明 | 类型 |
| blogID | 是 | 博客文章 ID | string |

#### 返回参数

| 参数名        | 必填 | 说明                                                           | 类型    |
| ------------- | ---- | -------------------------------------------------------------- | ------- |
| statusCode    | 是   | 状态码，包括系统级状态码和接口状态码                           | string  |
| desc          | 是   | 附加信息，包括状态码说明，错误信息等                           | string  |
| result        | 是   | 返回结果                                                       | object  |
| > id          | 否   | 博客 ID                                                        | string  |
| > title       | 否   | 标题                                                           | string  |
| > author      | 否   | 作者                                                           | string  |
| > content     | 否   | 内容                                                           | string  |
| > keywords    | 否   | 关键词列表                                                     | list    |
| > > keyword   | 否   | 关键词                                                         | string  |
| > comments    | 否   | 评论列表                                                       | list    |
| > > id        | 否   | 评论作者 ID                                                    | string  |
| > > name      | 否   | 评论作者                                                       | string  |
| > > content   | 否   | 评论内容                                                       | string  |
| > date        | 否   | 创建日期                                                       | string  |
| > updateDate  | 否   | 更新日期                                                       | string  |
| > likes       | 否   | 赞同者列表                                                     | list    |
| > > likesUser | 否   | 赞同者 ID                                                      | string  |
| > removed     | 否   | 是否已删除（默认为 false，已删除的为 true,不会显示在 result 中 | boolean |

#### 返回结果示例

> ```JavaScript
> // result
> {
>   statusCode:"000000",
>   desc:"请求成功",
>   result:{
>     id:"007",
>     title:"示例博客",
>     author:"feline",
>     content:"这是一篇示例博客",
>     keywords:["关键词1","关键词2"],
>     comments:[
>       {
>         id:"01",
>         name:"小明",
>         content:"这是一条示例评论"
>       }
>     ],
>     date:"2020-04-07",
>     updateDate:"2020-06-06",
>     likes:['02','05'],
>     removed:false
>   },
> }
> ```

### 添加博客文章

接口地址：/blogs/add
请求方式：POST
请求格式：JSON
返回格式：JSON

#### 请求参数

| 参数名        | 必填 | 说明        | 类型   |
| ------------- | ---- | ----------- | ------ |
| newBlog       | 是   | 新博客文章  | object |
| > title       | 否   | 标题        | string |
| > author      | 否   | 作者        | string |
| > content     | 否   | 内容        | string |
| > keywords    | 否   | 关键词列表  | list   |
| > > keyword   | 否   | 关键词      | string |
| > comments    | 否   | 评论列表    | list   |
| > > id        | 否   | 评论作者 ID | string |
| > > name      | 否   | 评论作者    | string |
| > > content   | 否   | 评论内容    | string |
| > date        | 否   | 创建日期    | string |
| > updateDate  | 否   | 更新日期    | string |
| > likes       | 否   | 赞同者列表  | list   |
| > > likesUser | 否   | 赞同者 ID   | string |

#### 返回参数

| 参数名        | 必填 | 说明                                                           | 类型    |
| ------------- | ---- | -------------------------------------------------------------- | ------- |
| statusCode    | 是   | 状态码，包括系统级状态码和接口状态码                           | string  |
| desc          | 是   | 附加信息，包括状态码说明，错误信息等                           | string  |
| result        | 是   | 返回结果                                                       | object  |
| > id          | 否   | 博客 ID                                                        | string  |
| > title       | 否   | 标题                                                           | string  |
| > author      | 否   | 作者                                                           | string  |
| > content     | 否   | 内容                                                           | string  |
| > keywords    | 否   | 关键词列表                                                     | list    |
| > > keyword   | 否   | 关键词                                                         | string  |
| > comments    | 否   | 评论列表                                                       | list    |
| > > id        | 否   | 评论作者 ID                                                    | string  |
| > > name      | 否   | 评论作者                                                       | string  |
| > > content   | 否   | 评论内容                                                       | string  |
| > date        | 否   | 创建日期                                                       | string  |
| > updateDate  | 否   | 更新日期                                                       | string  |
| > likes       | 否   | 赞同者列表                                                     | list    |
| > > likesUser | 否   | 赞同者 ID                                                      | string  |
| > removed     | 否   | 是否已删除（默认为 false，已删除的为 true,不会显示在 result 中 | boolean |

#### 返回结果示例

> ```JavaScript
> // result
> {
>   statusCode:"000000",
>   desc:"添加成功",
>   result:{
>     id:"007",
>     title:"示例博客",
>     author:"feline",
>     content:"这是一篇示例博客",
>     keywords:["关键词1","关键词2"],
>     comments:[
>       {
>         id:"01",
>         name:"小明",
>         content:"这是一条示例评论"
>       }
>     ],
>     date:"2020-04-07",
>     updateDate:"2020-06-06",
>     likes:['02','05'],
>     removed:false
>   },
> }
> ```

### 更新博客文章

接口地址：/blogs/update
请求方式：POST
请求格式：JSON
返回格式：JSON

#### 请求参数

| 参数名        | 必填 | 说明         | 类型   |
| ------------- | ---- | ------------ | ------ |
| updateBlog    | 是   | 更新博客文章 | object |
| > title       | 否   | 标题         | string |
| > author      | 否   | 作者         | string |
| > content     | 否   | 内容         | string |
| > keywords    | 否   | 关键词列表   | list   |
| > > keyword   | 否   | 关键词       | string |
| > comments    | 否   | 评论列表     | list   |
| > > id        | 否   | 评论作者 ID  | string |
| > > name      | 否   | 评论作者     | string |
| > > content   | 否   | 评论内容     | string |
| > date        | 否   | 创建日期     | string |
| > updateDate  | 否   | 更新日期     | string |
| > likes       | 否   | 赞同者列表   | list   |
| > > likesUser | 否   | 赞同者 ID    | string |

#### 返回参数

| 参数名        | 必填 | 说明                                                           | 类型    |
| ------------- | ---- | -------------------------------------------------------------- | ------- |
| statusCode    | 是   | 状态码，包括系统级状态码和接口状态码                           | string  |
| desc          | 是   | 附加信息，包括状态码说明，错误信息等                           | string  |
| result        | 是   | 返回结果                                                       | object  |
| > id          | 否   | 博客 ID                                                        | string  |
| > title       | 否   | 标题                                                           | string  |
| > author      | 否   | 作者                                                           | string  |
| > content     | 否   | 内容                                                           | string  |
| > keywords    | 否   | 关键词列表                                                     | list    |
| > > keyword   | 否   | 关键词                                                         | string  |
| > comments    | 否   | 评论列表                                                       | list    |
| > > id        | 否   | 评论作者 ID                                                    | string  |
| > > name      | 否   | 评论作者                                                       | string  |
| > > content   | 否   | 评论内容                                                       | string  |
| > date        | 否   | 创建日期                                                       | string  |
| > updateDate  | 否   | 更新日期                                                       | string  |
| > likes       | 否   | 赞同者列表                                                     | list    |
| > > likesUser | 否   | 赞同者 ID                                                      | string  |
| > removed     | 否   | 是否已删除（默认为 false，已删除的为 true,不会显示在 result 中 | boolean |

#### 返回结果示例

> ```JavaScript
> // result
> {
>   statusCode:"000000",
>   desc:"添加成功",
>   result:{
>     id:"007",
>     title:"示例博客",
>     author:"feline",
>     content:"这是一篇示例博客",
>     keywords:["关键词1","关键词2"],
>     comments:[
>       {
>         id:"01",
>         name:"小明",
>         content:"这是一条示例评论"
>       }
>     ],
>     date:"2020-04-07",
>     updateDate:"2020-06-06",
>     likes:['02','05'],
>     removed:false
>   },
> }
> ```

### 删除博客文章

接口地址：/blogs/delete
请求方式：POST
请求格式：JSON
返回格式：JSON

#### 请求参数

| 参数名 | 必填 | 说明                  | 类型   |
| ------ | ---- | --------------------- | ------ |
| blogID | 是   | 要删除的博客文章的 ID | string |

#### 返回参数

| 参数名     | 必填 | 说明                                 | 类型   |
| ---------- | ---- | ------------------------------------ | ------ |
| statusCode | 是   | 状态码，包括系统级状态码和接口状态码 | string |
| desc       | 是   | 附加信息，包括状态码说明，错误信息等 | string |
| result     | 是   | 返回结果                             | object |

#### 返回结果示例

> ```JavaScript
> // result
> {
>   statusCode:"000000",
>   desc:"删除成功",
>   result:{}
> }
> ```

## 博客用户 API

### 获取用户列表

接口地址：/user/list
请求方式：GET
请求格式：JSON
返回格式：JSON

#### 请求参数

无

#### 返回参数

| 参数名           | 必填 | 说明                                                           | 类型    |
| ---------------- | ---- | -------------------------------------------------------------- | ------- |
| statusCode       | 是   | 状态码，包括系统级状态码和接口状态码                           | string  |
| desc             | 是   | 附加信息，包括状态码说明，错误信息等                           | string  |
| result           | 是   | 返回结果                                                       | object  |
| > userList       | 否   | 用户列表                                                       | list    |
| > > id           | 否   | 用户 ID                                                        | string  |
| > > username     | 否   | 用户名                                                         | string  |
| > > password     | 否   | 密码                                                           | string  |
| > > nickname     | 否   | 昵称                                                           | string  |
| > > email        | 否   | 邮箱                                                           | string  |
| > > contact      | 否   | 用户联系方式列表                                               | list    |
| > > > id         | 否   | 联系方式 id                                                    | string  |
| > > > way        | 否   | 联系方式                                                       | string  |
| > > > url        | 否   | 链接                                                           | string  |
| > > introduce    | 否   | 作者简介                                                       | string  |
| > > userKeywords | 否   | 作者所有关键词列表                                             | list    |
| > > > keyword    | 否   | 作者所有关键词                                                 | string  |
| > > removed      | 否   | 是否已删除（默认为 false，已删除的为 true,不会显示在 result 中 | boolean |

#### 返回结果示例

> ```JavaScript
> // result
> {
>   statusCode:"000000",
>   desc:"请求成功",
>   result:{
>     id:"007",
>     username:"feline",
>     password:"1234567890",
>     nickname:"feline",
>     email:"aaa_bbb@ccc.com",
>     contacts:[
>         {
>           id:"00008",
>           way:"mail",
>           url:"aaa_bbb@ccc.com"
>         }
>       ]
>     introduce:"这是一个自我介绍示例",
>     userKeywords:["关键词1","关键词2"]
>   }
> }
> ```
