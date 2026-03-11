import vinothImage from '../assets/jbvinoth_compressed.jpg'

export default function About() {
    return (
        <section id="about">
            <div className="about-container">
                <div className="about-content">
                    <h2 className="section-title about-title">About Me</h2>
                    <p className="about-text">
                        Hi, I am <strong className="about-name">Vinoth</strong>. I am passionate about <strong className="about-emphasis">backend development</strong> and constantly improving my <strong className="about-emphasis">technical skills</strong>. I enjoy building <strong className="about-emphasis">efficient APIs</strong> and <strong className="about-emphasis">scalable backend solutions</strong>.
                    </p>
                </div>

                <div className="profile-image">
                    <img src={vinothImage} alt="Profile image" />
                </div>
            </div>
        </section>
    )
}

