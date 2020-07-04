import './app2.css'
import $ from "jquery"
const  $tabBar = $('#app2 .tabBar')
const $tabContent = $('#app2 .tabContent')
$tabBar.on('click','li',e=>{
    //事件委托，通过监听父元素tabBar来监听子元素li
    const $li = $(e.currentTarget)
    $li.addClass('selected')
        .siblings()
        .removeClass("selected")
    const index = $li.index()
    console.log(index)
    $tabContent.children()
        .eq(index).addClass('active')
        .siblings().removeClass('active')
})
$tabBar.children().eq(0).trigger('click')