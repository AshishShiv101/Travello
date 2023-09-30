import "./TripStyles.css";
import TripData from "./TripData";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps.</p>
      <div className="tripcard">
        <TripData
          image={
            "https://images.unsplash.com/photo-1573611030146-ff6916c398fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1951&q=80"
          }
          heading="Spain Chronicles"
          text="Spain is a diverse and vibrant country located in southwestern Europe, known for its rich history, stunning architecture, diverse culture, and beautiful landscapes. Here's an overview of Spain tourism:
          Historical and Architectural Attractions:
          Spain is renowned for its historical and architectural landmarks, including the Alhambra in Granada, Sagrada Familia in Barcelona, Alcazar of Segovia, Cathedral of Seville, and the historic city of Toledo. "
        />
        <TripData
          image={
            "https://images.unsplash.com/photo-1592990022203-9537952f9c84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
          }
          heading="Jerusalem's Fascination "
          text="Jerusalem, a city with immense historical, cultural, and religious significance, is a popular tourist destination. It is a place of great importance for Judaism, Christianity, and Islam, making it a center of pilgrimage and cultural exploration. Here's an overview of tourism in Jerusalem:
          Religious and Historical Sites: A significant Jewish holy site, often visited for prayer and reflection."
        />
        <TripData
          image={
            "https://images.unsplash.com/photo-1557409518-691ebcd96038?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          }
          heading="Japan's Attraction"
          text="Japan is a fascinating and diverse country that attracts tourists with its blend of traditional culture and modern attractions. Here's an overview of tourism in Japan:
          Historical and Cultural Attractions: Known for its traditional temples, shrines, and gardens, preserving the essence of old Japan."
        />
      </div>
    </div>
  );
}

export default Trip;
