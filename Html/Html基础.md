## 1.网页的完整代码如下：
```html
标题   <h1>勇气</h1>
段落   <p>...
          ...</p>
图片   <img src ="1.jip">
网页中每个内容在浏览器中的显示，都要存放到各种标签中。
HTML标签不区分大小写<h1>和<H1>一样，但建议小写。
```

## 2.HTML文件的固定结构
```html
<html>
      <head>...</head>
      <body>...</body>
</html>
```

## 3.这些标签可以用在head部分：
```html
<head>
      <title>...</title>
      <meta>
      <link>
      <style>...</style>
      <script>...</script>
</head>
```

## 4.代码注释：<!--注释文字-->
```html
<!DOCTYPE>是声明，它与注释格式类似，但它不属于注释！
<!DOCTYPE>是一种标准通用标记语言的文档类型声明；必须写在<html>标签前。
```

## 5.放在body中 
```html
<em>默认斜体</em>
<strong>默认粗体</strong>
```
  
## 6.<p>标签  添加段落
```html
语法：<p>段落文本</p>
<p>标签的默认样式是  段前段后都会有空白，可用css样式来删除或改变它。
```
  
## 7.<hx>标签  为网页添加标题
```html
语法： <hx>标题文本</hx>（x为1-6，h1是最高的等级）
```
  
## 8.一些基本的标签
```html
<span>标签是没有语义的，它的作用就是为了设置单独的样式用的。
<q>引用文本</q> 语义：引用别人的话  有“” （短文本引用，如一句诗，一句话）
<blockquote>引用文本</blockquote>　　长文本引用　　缩进　无“”
<br>标签分行显示文本
语法： xhtml 1.0写法：<br  />  用这个比较规范
html 4.01写法：<br>
<br>是一个空标签，没有HTML内容的标签就是空标签，空标签只需写一个开始标签，如<br  />,<hr  />,<img  />.html是忽略回车和空格的。
&nbsp ; 输入空格
<hr  />标签  添加水平横线
html  4.01版本 <hr  >
xhtml  1.0版本 <hr  />    线条粗  灰色  一般用这个
<code>标签  加入一行代码  如 <code>var i=i+300;</code>
在文章中一般如果要插入多行代码时不能使用<code>标签了。
<pre>标签 为你的网页加入大段代码
<pre>语言代码段</pre> <pre>标签的主要作用：与格式化的文本。被包围在pre元素中的文本通常 会保留空格和换行符。  <pre>标签不只是为显示计算机的源代码时用的，在你需要在网页中于预显示格式时都可以使用它，只是<pre>标签的一个常见应用就是用来展示计算机的源代码。
```