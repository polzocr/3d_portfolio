import './index.css'

import Aside from '../../components/cv/aside/index'
import Content from '../../components/cv/content/index'

export default function Cv(){
    return (
        <main>
            <section id='cv'>
                <section id="side">
                    <Aside />
                </section>
                <section id="content">
                    <Content />
                </section>
            </section>
        </main>
    )
}