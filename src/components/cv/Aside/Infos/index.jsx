import "./index.css"

import Element from './Element/index'

export default function Infos({name, elements}){
    return (
        <div className="infos">
            <h3 className="title-infos">{name}</h3>
            
            {elements.map((element,index) => {
                return <Element 
                        key={`${element.name}-${index}`}
                        element = {element}
                        type = {name}
                        />
            })}
            
        </div> 
    )
}