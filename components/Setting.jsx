import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Link from "next/link";
import Image from "next/image";
import partenaire1 from "../public/partenaire1.png";
import mmi from "../public/mmi.png";
import partenaire3 from "../public/partenaire3.png";
import scalingo from "../public/scalingo.png";

import RoundButton from "./RoundButton";
import Button from "./Button";
import Logo from "./Logo";

export default function Setting({ setIsOpenSetting }) {
    const closeSetting = () => {
        setIsOpenSetting(false);
    };

    return (
        <Container>
            <Grid>
                <GridItem area="header">
                    <HeaderContainer>
                        <h1>Paramètres</h1>
                        <RoundButton onClick={closeSetting} layout="cross" size="medium" />
                    </HeaderContainer>
                </GridItem>
                <GridItem area="content">
                    <ContentContainer>
                        <SectionContent>
                            <H2>Questions & Résultats</H2>
                            <Content>
                                <P
                                    css={css`
                                        margin-bottom: 1rem;
                                    `}
                                >
                                    Tu peux réinitialiser tes résultats afin de recommencer le questionnaire et obtenir
                                    de nouvelles propositions de formations.
                                </P>
                                <Button type="accent">Réinitialiser mes résultats</Button>
                            </Content>
                            {/* <Content>
                                <P
                                    css={css`
                                        margin-bottom: 1rem;
                                    `}
                                >
                                    Tu peux voir l’historique des réponses et les modifier à ta guise. Attention, cela
                                    peut avoir la conséquence de modifier nos précédentes suggestions.
                                </P>
                                <Button>Voir toutes mes réponses</Button>
                            </Content> */}
                        </SectionContent>
                        <SectionContent>
                            <H2>Qui sommes-nous ?</H2>
                            <Content>
                                <P>
                                    Etudi’quoi est un projet porté par des étudiants au sein de l’IUT Bordeaux Montaigne
                                    en MMI, formation pluridisciplinaire dans les metiers du web et du multimédia.
                                </P>
                            </Content>
                        </SectionContent>
                        <SectionContent>
                            <H2>Partenaires</H2>
                            <Content>
                                <ImgBox>
                                    <ImgBoxChild>
                                        <Image src={partenaire1} layout={"fixed"} alt="Picture of partenaire" />
                                    </ImgBoxChild>
                                    <ImgBoxChild>
                                        <Image src={mmi} layout={"fixed"} alt="Picture of partenaire" />
                                    </ImgBoxChild>
                                </ImgBox>

                                <ImgBox>
                                    <ImgBoxChild>
                                        <Image src={partenaire3} layout={"fixed"} alt="Picture of partenaire" />
                                    </ImgBoxChild>
                                    <ImgBoxChild>
                                        <Image src={scalingo} layout={"fixed"} alt="Picture of partenaire" />
                                    </ImgBoxChild>
                                </ImgBox>
                            </Content>
                        </SectionContent>
                    </ContentContainer>
                </GridItem>
                <GridItem area="footer">
                    <FooterBoxSettings>
                        <LinksFooterBox>
                            <Link href="/contact">
                                <A>Nous contacter</A>
                            </Link>
                            <Link href="/cgu">
                                <A>Conditions générales d'utilisation</A>
                            </Link>
                            <Link href="/code-source">
                                <A>Accéder au code source</A>
                            </Link>
                            <LinkFlexList>
                                <Link href="/instagram">
                                    <A>Instagram</A>
                                </Link>
                                -
                                <Link href="/twitter">
                                    <A> Twitter</A>
                                </Link>
                                -
                                <Link href="/tiktok">
                                    <A> TikTok</A>
                                </Link>
                            </LinkFlexList>
                        </LinksFooterBox>
                        <LinksFooterBox>
                            <Logo type="setting-icon" />
                            <p>© Etudi’quoi 2022</p>
                        </LinksFooterBox>
                    </FooterBoxSettings>
                </GridItem>
            </Grid>
        </Container>
    );
}

const Container = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    overflow: scroll;
    margin: auto;
    height: 100vh;
    width: 100vw;
    padding: 2rem 1.875rem;
    max-width: 480px;
    background: ${({ theme }) => theme.backgroundGradient};
    text-align: center;
    transform: translateX(-50%);
`;

const Grid = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 10vh 1fr 15vh;
    grid-template-areas:
        "header"
        "content"
        "footer";
`;

const GridItem = styled.div`
    grid-area: ${(props) => props.area};
    display: grid;
    place-items: center;
    margin-bottom: 1.688rem;
`;

const HeaderContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0;
    justify-content: space-between;
`;

const ContentContainer = styled.div`
    height: 100%;
    flex-direction: column;
    display: flex;

    justify-content: space-around;
`;

const SectionContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1.688rem;
`;

const H2 = styled.h2`
    text-align: left;
`;

const A = styled.a`
    width: fit-content;
    margin: 0 auto;
    border-bottom: 1px solid ${({ theme }) => theme.primary};
    cursor: pointer;
    margin-bottom: 0.5rem;
`;

const Content = styled.div`
    border: 2px solid ${({ theme }) => theme.primary};
    border-radius: 1rem;
    padding: 1rem;
`;

const P = styled.p`
    text-align: left;
    font-size: 1rem;
    line-height: 1.5;
`;
const ImgBox = styled.div`
    width: 100%;
    height: 10vh;
    position: relative;
    display: flex;
`;
const ImgBoxChild = styled.div`
    display: flex;
    justify-content: space-around;
    position: relative;
    width: 50%;
    height: 100%;
    align-items: center;
`;
const FooterBoxSettings = styled.div`
    height: fit-content;
    position: relative;
`;

const LinksFooterBox = styled.div`
    margin-bottom: 2rem;
    display: grid;
    color: ${({ theme }) => theme.primary};
`;

const LinkFlexList = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
`;
