// import React, { useEffect, useState } from "react";
// import request from "request";

// const Twich = () => {
//   const [games, setGames] = useState();
//   useEffect(() => {
//     const CLIENT_ID = "lfvotu9w8wkjxoo0gr29fgxxehnzrx";
//     const BASE_URL = "https://api.twitch.tv/kraken";
//     fetch(
//       "https://api.twitch.tv/kraken",
//       {
//         method: "GET",
//         url: `${BASE_URL}/games/top`,
//         headers: {
//           "Client-ID": CLIENT_ID,
//           Accept: "application/vnd.twitchtv.v5+json",
//         },
//       },
//       function (err, res, body) {
//         if (err) {
//           return console.log(err);
//         }

//         return JSON.parse(body);
//       }
//     ).then((body) => {
//       setGames(body);
//     });
//   }, []);
//   return (
//     <div>
//       {games.map((game) => {
//         return (
//           <p>{`Game Viewer:${game.viewers} && Game Name:${game.game.name}`}</p>
//         );
//       })}
//     </div>
//   );
// };

// export default Twich;
