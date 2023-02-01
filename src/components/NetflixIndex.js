import "./NetflixIndex.css";
import NetflixHeader from "./NetflixHeader";
import NetflixMain from "./NetflixMain";
import { NetflixRegister } from "./NetflixRegister";
import NetflixFooter from "./NetflixFooter";
export default function NetflixIndex() {
    return (
        <div className="container-fluid">
            <div className="box">
                <header>
                    <NetflixHeader />
                </header>
                <section className="d-flex justify-content-center align-items-center">
                    <main>
                        <NetflixMain/>
                        <NetflixRegister/>
                    </main>
                </section>
                <footer className="m-2 p-2">
                    <NetflixFooter />
                </footer>

            </div>
        </div>
    );
}
