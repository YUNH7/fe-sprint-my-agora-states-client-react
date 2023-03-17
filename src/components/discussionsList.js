import { Discussion } from './discussion'
import { useState } from 'react'

export function DiscussionsList({ dataDummy, delData }) {
    const [page, setPage] = useState('1')
    let len = dataDummy.length
    let pagesNum = Math.floor(len / 10) + 1
    let lastDiscuss = page === pagesNum ? len : page * 10

    const spanArr = []
    for (let i = 1; i <= pagesNum; i++) {
        spanArr.push(`${i}`)
    }

    // span onClick 함수 만들기
    // setPage
    const handledPage = (e) => {
        setPage(e.target.id)
    }

    // className 속성을 조건문으로 설정해서 css 적용하기

    const dataPart = dataDummy.slice((page-1)*10, lastDiscuss) // (page-1)*10, lastDiscuss


    return [<ul>{dataPart.map((data) =>
        <Discussion key={data.id} aData={data} delData={delData} />
    )}</ul>,

    // span을 pagesNum만큼 반복하고 안에 숫자 1,2,3,4,5 순서로 넣기
    <section className='discussion__pages'>
        {spanArr.map((span) => {
            return (
                <span key={span} id={span} onClick={handledPage} className={span === page ? 'discussion__page' : undefined}>
                    {span}
                </span>)
        })}

    </section>
    ]
}