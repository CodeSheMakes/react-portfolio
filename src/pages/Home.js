import React from 'react';
import style from './page.module.css'

const Home = () => {
    return (  
        <div className={style.mainPageWrapper}>
            <h1>Alliance of Black Nurses Association of Oregon</h1>
            <br /><br />
            <h3>Our continued legacy...</h3>
            <p>The National Black Nurses Association’s mission is “to represent and provide a forum for Black nurses to advocate and implement strategies to ensure access to the highest quality of healthcare for persons of color.”</p>
            <br />
            <p> The NBNA was organized in 1971 under the leadership of Dr. Lauranne Sams, former Dean of Tuskegee University School of Nursing in Alabama. NBNA serves as the professional voice for over 250,000 African American registered nurses, licensed vocational/practical nurses, nursing students, and retired nurses from the USA, Eastern Caribbean, and Africa. There are 117 chapters, in 33 states. </p>
            <br />
            <p>On February 9th 2020 Oregon became the first chapter affiliate of NBNA in the Pacific Northwest!   Alliance of Black Nurses Association of Oregon is investing in our community and the future by helping every nurse excel and achieve greatness.</p>
            </div>  
    );
}

export default Home;