import './index.css'
const Project = (props) =>{
    const{blog} = props
    const {projectName, description, profileImage} = blog
    return(
        <li className='blog-list'>
            <img src={profileImage} alt="profile" className='profileImage' />
            <h1 className='project-name'><span className='default-name'>Name: </span>{projectName}</h1>
            <p className='description'><span className='default-name'>Description: </span>{description}</p>
            <div className='btn-container'>
            <button type='button' className='btn'>
                <a href="https://shopee1433.ccbp.tech/">
                Know More
                </a>
                </button>
            </div>
         </li>
    )
}
export default Project