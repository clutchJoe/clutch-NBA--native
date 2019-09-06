# <center>NBA 季后赛主页</center>

## 主页

---

整个页面使用原生编写主要用 HTML 和 CSS，在比赛倒计时，以及明亮、黑暗模式的切换使用原生 JavaScript。

页面两个主要的文字特效都是用 CSS animate 完成

下拉导航栏也是用原生 CSS 编写，主要使用`input`标签的`checked`属性和`a`标签的点击属性`target`。未来目标继续使用原生完成二级下拉菜单。

每场比赛有两个区块，分别是前面的比赛简要信息，以及后面的两球队简要信息和双方球星的 highlight 链接。点击右下角可前后切换，为两个块设置属性`backface-visibility: hidden;`可隐藏后方信息。

做了一定的屏幕尺寸适应，效果比较粗糙，主要是在 PC 上最为适应。
</br>
</br>
</br>
![1](https://github.com/clutchJoe/clutch-NBA--native/blob/master/prevImg/1.PNG)
_<center>明亮模式</center>_

![2](https://github.com/clutchJoe/clutch-NBA--native/blob/master/prevImg/2.PNG)
_<center>黑暗模式</center>_

## 嵌入视频

---

在页面中嵌入 YouTube 视频，通过将视频链接复制到[onelineplayer](https://onelineplayer.com/ "onelineplayer")上，他就会返回一对`iframe`标签，将其复制粘贴到 HTML 文档上即可。你甚至可以设置播放器上的控件、视窗大小、自动播放等等。

![3](https://github.com/clutchJoe/clutch-NBA--native/blob/master/prevImg/3.PNG)
