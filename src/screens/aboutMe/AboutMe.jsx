import React from 'react'
import './aboutMe.css'
import person from '../../images/person.png'
function AboutMe() {
    return (
        <div className="about__container" id="about-me">
            <div>
                <img src={person} alt="person icon" />
            </div>
            <div className="about__text">
                <h1>About Me</h1>
                <p>Hi~我是Samuel 周冠羽，是一個對於寫程式有熱忱且樂於分享學習經驗的軟體工程師。</p>
                <p>喜歡在嘗試透過新舊技術解決問題。</p>
                <p>在過去工作經驗獲得很多收穫，培養我在有限資源環境下也要有辦法解決問題的特質。</p>
                <p>本身對於.net方面的後端程式開發框架(.net webform,mvc,.net core)、Node.Js(Express)以及PHP(Laravel)有鑽研跟開發經驗。</p>
                <p>和一些js前端框架(React,Vue,Angular)有些許涉略</p>
                <p>期許能透過所學專長回饋社會並和有緣的組織團隊一同成長。</p>
            </div>
        </div>
    )
}

export default AboutMe
