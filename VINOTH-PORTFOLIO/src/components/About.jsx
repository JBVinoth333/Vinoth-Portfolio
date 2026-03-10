import vinothImage from '../assets/jbvinoth_compressed.jpg'

export default function About() {
    return (
        <section id="about">
            <div className="about-container">
                <div className="about-content">
                    <h2 className="section-title about-title">About Me</h2>
                    <p className="about-text">
                        Hi, I am <strong className="about-name">Vinoth</strong>. I am an <strong className="about-emphasis">enthusiastic learner</strong> who is passionate about continuously improving my skills in <strong className="about-emphasis">backend development</strong>. I enjoy exploring <strong className="about-emphasis">new technologies</strong> and building practical solutions that solve <strong className="about-emphasis">real-world problems</strong>.
                    </p>
                </div>

                <div className="profile-image">
                    <img src={vinothImage} alt="Profile image" />
                </div>
            </div>
        </section>
    )
}
