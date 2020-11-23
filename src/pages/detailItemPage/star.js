export default ({handleStarClick, star}) => {
    const array = new Array(5).fill(0);
    return array.map((item, index) => (
    <li key={index}>
        {star >= index + 1 ? 
           <i class="fas fa-star" id={index + 1} style={{color: "red"}} onClick={handleStarClick}></i> :
           <i class="fas fa-star" id={index + 1} style={{color: "rgb(250, 210, 210)"}} onClick={handleStarClick}></i>}
    </li>)
    );
}