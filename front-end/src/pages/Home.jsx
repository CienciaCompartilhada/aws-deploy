import styled from 'styled-components';
import Menu from '../components/Menu/Menu';
import ResearchFeed from '../components/Home/ResearchFeed';
import { useState } from 'react';
import TeacherFeed from '../components/Home/TeacherFeed';
import StudentFeed from '../components/Home/StudentFeed';
import Preferences from '../components/Home/Preferences';

export default function Home() {
    const [chosen, setChosen] = useState("pesquisas")
    return(
        <HomeDiv>
        <Menu setChosen={setChosen} chosen={chosen}/>
        <HomeFeed>
            {
                chosen === 'pesquisas' ? <ResearchFeed/> : (
                    chosen === 'professores' ? <TeacherFeed/> : (
                        chosen === 'alunos' ? <StudentFeed/> : <Preferences/>
                    )
                )
            }
        </HomeFeed>
        </HomeDiv>
    );
}

const HomeDiv = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
`;

const HomeFeed = styled.div`
    background: linear-gradient(to bottom, #63BBA2, #8DD4E0);
    width: 100vw;
    height: calc(100vh - 70px);
    display: flex;
    justify-content: center;
`;