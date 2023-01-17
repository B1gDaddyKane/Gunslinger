import GunslingerComponent from '../components/forms/gunslingergenerator';
import background from '../assets/western_gunslinger_background.png';
const GunslingerPage = () => (
    <div
        className="bg-cover bg-center h-screen"
        style={{
            backgroundImage: `url(${background})`,
        }}>
        <GunslingerComponent />
    </div>
);

export default GunslingerPage;
