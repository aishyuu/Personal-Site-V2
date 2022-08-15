import "../index.css"
import profile from "../images/profile_pic.jpg"

function About() {
    function getMonthDifference(startDate, endDate) {
        return(
            endDate.getMonth() - startDate.getMonth() + 12 * (endDate.getFullYear() - startDate.getFullYear())
        );
    }

    const timeLearning = getMonthDifference(new Date('2022-04-18'), new Date())

    return(
        <div className="about-container">
            <div className="about-content">
                <h1 className="header-text">About me!</h1>
                <br />
                <p className="content-text">Hello! I'm Ivan Matias. I've been close to computers since as long as I can remember and have been passionate about them ever since.</p>
                <br />
                <p className="content-text">From messing around with OS's at age 7 (and bricking them constantly), to installing ROMS of games on my computer and general modding of software in my early teens, I've always had an itch for messing around with computer software. The ability to just mess around with things and make it your own has always given me a rush that I constantly chase with every project I work on.</p>
                <br />
                <p className="content-text">In recent times however, I've been messing around with general programming and landed with a passion in making awesome things in the web.</p>
                <br />
                <p className="content-text">As of mid April, it has been {timeLearning} months since I've started my web dev journey and I've learned so much, take a look!</p>
                <br />
                <p className="content-text">Technologies I have recently worked with: </p>
                <ul className="technologies-list">
                    <li className="technology-item">JavaScript (ES6+)</li>
                    <li className="technology-item">React</li>
                    <li className="technology-item">Node.js</li>
                    <li className="technology-item">Express.js</li>
                    <li className="technology-item">MongoDB</li>
                </ul>
            </div>
            <div className="about-profile">
                <img src={profile} className="profile" height="300" width="300" alt="profile" />
            </div>
        </div>
    )
}

export default About