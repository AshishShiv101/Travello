import DestinationData from "./DestinationData";
import "./DestinationStyles.css";
const Destination = () => {
  return (
    <div className="destination">
      <h1> Popular Locations</h1>
      <p>Explore the world outside</p>

      <DestinationData
        className="first-des"
        heading="Stone Henge,England"
        text="Stonehenge is a prehistoric monument located in Wiltshire, England.
          It is one of the most famous and recognizable archaeological sites
          in the world, known for its massive stone circle and the mystery
          surrounding its construction and purpose. Key features of Stonehenge
          include a circular arrangement of large standing stones, known as
          sarsens (sandstone blocks), topped with lintels (horizontal stones).
          The inner circle contains smaller bluestones, which are believed to
          have been brought from a site in Wales."
        img1={
          "https://images.unsplash.com/photo-1522074174872-74def8b1d699?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
        }
        img2={
          "https://images.unsplash.com/photo-1588578507406-f90d1df22e8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
        }
      />
      <DestinationData
        className="first-des-reverse"
        heading="Bali,Indonesia"
        text="Bali, an Indonesian island known for its lush landscapes, rich culture, and beautiful beaches, is a popular tourist destination. Here's an overview of Bali tourism:
        Beaches and Water Activities:
        Bali is famous for its stunning beaches, offering opportunities for surfing, snorkeling, scuba diving, and other water sports. Popular beaches include Kuta, Seminyak, Nusa Dua, and Uluwatu.
        Ubud and Cultural Attractions:
        Ubud, located in the central highlands, is the cultural hub of Bali. It's known for its traditional arts, dance performances, and ancient temples like the Sacred Monkey Forest Sanctuary and Ubud Palace.
        Temples and Sacred Sites:
        Bali is home to numerous temples showcasing unique Balinese architecture and spirituality. Notable temples include Tanah Lot, Uluwatu Temple, Besakih Temple, and Tirta Empul Temple."
        img1={
          "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1938&q=80"
        }
        img2={
          "https://images.unsplash.com/photo-1573790387438-4da905039392?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80"
        }
      />
    </div>
  );
};

export default Destination;
