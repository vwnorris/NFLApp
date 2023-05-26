import * as React from "react"
import { Link } from "gatsby"
import MapComponent from "../components/mapComponent" 
import Layout from "../components/layout"


const cities = [
  {
    name: "Buffalo Bills",
    location: [42.8864, -78.8784],
    iconUrl: "https://cdn.freebiesupply.com/images/large/2x/buffalo-bills-logo-transparent.png",
  },
  {
    name: "Miami Dolphins",
    location: [25.7617, -80.1918],
    iconUrl: "https://cdn.freebiesupply.com/images/large/2x/miami-dolphins-logo-transparent.png",
  },
  {
    name: "New England Patriots",
    location: [42.3601, -71.0589],
    iconUrl: "https://cdn.freebiesupply.com/images/large/2x/new-england-patriots-logo-transparent.png",
  },
  {
    name: "New York Giants",
    location: [40.7128, -74.0060],
    iconUrl: "https://cdn.freebiesupply.com/images/large/2x/new-york-giants-logo-transparent.png",
  },
  {
    name: "New York Jets",
    location: [40.7128, -75.0060],
    iconUrl: "https://cdn.freebiesupply.com/images/large/2x/new-york-jets-logo-transparent.png",
  },
  {
    name: "Baltimore Ravens",
    location: [39.2904, -76.6122],
    iconUrl: "https://cdn.freebiesupply.com/images/large/2x/baltimore-ravens-logo-transparent.png",
  },
  {
    name: "Cincinnati Bengals",
    location: [39.1031, -84.5120],
    iconUrl: "https://cdn.freebiesupply.com/images/large/2x/cincinnati-bengals-logo-transparent.png",
  },
  {
    name: "Cleveland Browns",
    location: [41.4993, -81.6944],
    iconUrl: "https://cdn.freebiesupply.com/images/large/2x/cleveland-browns-logo-transparent.png",
  },
  {
    name: "Pittsburgh Steelers",
    location: [40.4406, -79.9959],
    iconUrl: "https://cdn.freebiesupply.com/images/large/2x/pittsburgh-steelers-logo-transparent.png",
  },
  {
    name: "Houston Texans",
    location: [29.7604, -95.3698],
    iconUrl: "https://cdn.freebiesupply.com/images/large/2x/houston-texans-logo-transparent.png",
  },
  {
    name: "Indianapolis Colts",
    location: [39.7684, -86.1581],
    iconUrl: "https://cdn.freebiesupply.com/images/large/2x/indianapolis-colts-logo-transparent.png",
  },
  {
    name: "Jacksonville Jaguars",
    location: [30.3322, -81.6557],
    iconUrl: "https://cdn.freebiesupply.com/images/large/2x/jacksonville-jaguars-logo-transparent.png",
  },
  {
    name: "Tennessee Titans",
    location: [36.1627, -86.7816], 
    iconUrl: "https://cdn.freebiesupply.com/images/large/2x/tennessee-titans-logo-transparent.png",
  },
  {
    name: "Denver Broncos",
    location: [39.7392, -104.9903],
    iconUrl: "https://cdn.freebiesupply.com/images/large/2x/denver-broncos-logo-transparent.png",
  },
  {
    name: "Kansas City Chievs",
    location: [39.0997, -94.5786],
    iconUrl: "https://cdn.freebiesupply.com/images/large/2x/kansas-city-chiefs-logo-transparent.png",
  },
  {
    name: "Las Vegas Raiders",
    location: [36.1699, -115.1398],
    iconUrl: "https://cdn.freebiesupply.com/images/large/2x/oakland-raiders-logo-transparent.png",
  },
  {
    name: "Los Angeles Rams",
    location: [34.0522, -118.2437],
    iconUrl: "https://cdn.freebiesupply.com/images/large/2x/los-angeles-rams-logo-transparent.png",
  },
  {
    name: "Los Angeles Chargers",
    location: [34.0522, -119.2437],
    iconUrl: "https://cdn.freebiesupply.com/images/large/2x/los-angeles-chargers-logo-transparent.png",
  },
  {
    name: "Dallas Cowboys",
    location: [32.7767, -96.7970],
    iconUrl: "https://cdn.freebiesupply.com/images/large/2x/dallas-cowboys-logo-transparent.png",
  },
  {
    name: "Philadelphia Eagles",
    location: [39.9526, -75.1652],
    iconUrl: "https://cdn.freebiesupply.com/images/large/2x/philadelphia-eagles-logo-transparent.png",
  },
  {
    name: "Washington Commanders",
    location: [38.9072, -77.0369],
    iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Washington_Commanders_logo.svg/1024px-Washington_Commanders_logo.svg.png",
  },
  {
    name: "Chicago Bears",
    location: [41.8781, -87.6298],
    iconUrl: "https://cdn.freebiesupply.com/images/large/2x/chicago-bears-logo-transparent.png",
  },
  {
    name: "Detroit Lions",
    location: [42.3314, -83.0458],
    iconUrl: "https://cdn.freebiesupply.com/images/large/2x/detroit-lions-logo-transparent.png",
  },
  {
    name: "Green Bay Packers",
    location: [44.5133, -88.0133],
    iconUrl: "https://cdn.freebiesupply.com/images/large/2x/green-bay-packers-logo-transparent.png",
  },
  {
    name: "Minnesota Vikings",
    location: [44.9778, -93.2650],
    iconUrl: "https://cdn.freebiesupply.com/images/large/2x/minnesota-vikings-logo-transparent.png",
  },
  {
    name: "Atlanta Falcons",
    location: [33.7490, -84.3880],
    iconUrl: "https://cdn.freebiesupply.com/images/large/2x/atlanta-falcons-logo-transparent.png",
  },
  {
    name: "Carolina Panthers",
    location: [35.2271, -80.8431],
    iconUrl: "https://cdn.freebiesupply.com/images/large/2x/carolina-panthers-logo-transparent.png",
  },
  {
    name: "New Orleans Saints",
    location: [29.9511, -90.0715],
    iconUrl: "https://cdn.freebiesupply.com/images/large/2x/new-orleans-saints-logo-transparent.png",
  },
  {
    name: "Tampa Bay Buccanneers",
    location: [27.9506, -82.4572],
    iconUrl: "https://cdn.freebiesupply.com/images/large/2x/tampa-bay-buccaneers-logo-transparent.png",
  },
  {
    name: "Arizona Cardinals",
    location: [33.4484, -112.0740],
    iconUrl: "https://cdn.freebiesupply.com/images/large/2x/arizona-cardinals-logo-transparent.png",
  },
  {
    name: "San Francisco 49ers",
    location: [37.7749, -122.4194],
    iconUrl: "https://cdn.freebiesupply.com/images/large/2x/san-francisco-49ers-logo-transparent.png",
  },
  {
    name: "Seattle Seahawks",
    location: [47.6062, -122.3321],
    iconUrl: "https://cdn.freebiesupply.com/images/large/2x/seattle-seahawks-logo-transparent.png",
  },
];



const Locations = () => (
  <Layout>
    <h1 style={{textAlign: 'center', color: '#444', fontFamily: 'Arial, sans-serif', fontWeight: 'bold'}}>Hi from the locations Page!</h1>
    <p style={{textAlign: 'center', color: '#666', fontFamily: 'Arial, sans-serif', fontSize: '18px'}}>Below you can see the locations of the current 32 NFL teams. Maybe we will see one across the pond one day?</p>
    <MapComponent cities={cities} />
  </Layout>
)



export default Locations
