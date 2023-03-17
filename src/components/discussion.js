

export function Discussion({ aData, delData }) {
    const delDiscuss = (e) => {
        delData(e.target.id)
    }

    return <li className="discussion__container" id={aData.id}>
        <div className="discussion__avatar--wrapper">
            <img className="discussion__avatar--image" src={aData.avatarUrl} alt={`avatar of${aData.author}`} />
        </div>
        <div className="discussion__content">
            <h2 className="discussion__title">
                <a href={aData.url} target="_blank">{aData.title}</a>
            </h2>
            <div className="discussion__information">{`${aData.author} / ${new Date(aData.createdAt).toLocaleString()}`}</div>
        </div>
        <div className="discussion__answered">
            <i className={aData.answer ? 'fa-solid fa-square-check' : 'fa-regular fa-square-check'}></i><span id={aData.id} onClick={delDiscuss}>삭제</span>
        </div>

    </li>

}