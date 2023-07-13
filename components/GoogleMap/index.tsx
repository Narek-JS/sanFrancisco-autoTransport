import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Container } from '../Container';
import classes from './index.module.css';

const center = {
  lat: 110,
  lng: -138.523
};

const GoogleMapComponent: React.FC = () => {

  return (
    <div className={classes.content}>
      <LoadScript
        googleMapsApiKey="AIzaSyDRgYM3NhMFTlOxjF33laYQWVGOordP4Z4"
      >
        <GoogleMap
          mapContainerStyle={{
            maxHeight: '660px',
            maxWidth: '1220px',
            width: '100%',
            height: '100%'
          }}
          center={center}
          zoom={10}
        />
      </LoadScript>
    </div>
  )
}
export { GoogleMapComponent };
