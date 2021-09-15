import "./App.css";
import { useMemo, useState, useEffect } from "react";
import {useWindowDimensions} from "./utils";

import Home from "./Home";
import Navbar from "./Navbar";
import About from "./About";


import * as anchor from "@project-serum/anchor";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  getPhantomWallet,
  getSolflareWallet,
  getSolletWallet,
} from "@solana/wallet-adapter-wallets";

import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";

import { WalletDialogProvider } from "@solana/wallet-adapter-material-ui";

const treasury = new anchor.web3.PublicKey(
    process.env.REACT_APP_TREASURY_ADDRESS!
);

const config = new anchor.web3.PublicKey(
    process.env.REACT_APP_CANDY_MACHINE_CONFIG!
);

const candyMachineId = new anchor.web3.PublicKey(
    process.env.REACT_APP_CANDY_MACHINE_ID!
);

const network = process.env.REACT_APP_SOLANA_NETWORK as WalletAdapterNetwork;

const rpcHost = process.env.REACT_APP_SOLANA_RPC_HOST!;
const connection = new anchor.web3.Connection(rpcHost);

const startDateSeed = parseInt(process.env.REACT_APP_CANDY_START_DATE!, 10);

const txTimeout = 30000; // milliseconds (confirm this works for your project)

const App = () => {
  const endpoint = useMemo(() => clusterApiUrl(network), []);

  const wallets = useMemo(
      () => [getPhantomWallet(), getSolflareWallet(), getSolletWallet()],
      []
  );

  const { height, width } = useWindowDimensions();

  const akuma ={
    minHeight: 0,
    maxWidth:"100%",
    maxHeight:"100%",
    flex:1,

  };

  const image = {
    maxWidth:"100%",
    maxHeight:"100%",
    display:"flex",
    flexGrow:1
  };

  return (
      <div>
        <div style={{ display:"flex", flexDirection:"column", maxHeight:height, flex:1} }>
          <Navbar></Navbar>
          <div style={{ display:"flex", flexGrow:1, justifyContent:"center", minHeight:0}}>
            <div style={{display:"flex", flexDirection:"row", justifyContent:"center", flex: 1}} className="mintcont" >

              <div style={image} >
                <img style={akuma} className="akuma a" src='/images/a.png'/>
              </div>

              <div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", flexGrow:1}} className="mintb">
                <p style={{textAlign:"center", fontSize:"12vw", color:"#ff2a00", fontFamily:"InTheDark", margin:0}}>Akumaten</p>
                <ConnectionProvider endpoint={endpoint}>
                  <WalletProvider wallets={wallets} autoConnect>
                    <WalletDialogProvider>
                      <Home
                          candyMachineId={candyMachineId}
                          config={config}
                          connection={connection}
                          startDate={startDateSeed}
                          treasury={treasury}
                          txTimeout={txTimeout}
                      />
                    </WalletDialogProvider>
                  </WalletProvider>
                </ConnectionProvider>
              </div>

              <div style={image}>
                {width < 600 ? <img style={akuma} className="akuma c" src='/images/c.png'/> : <img style={akuma} className="akuma b" src='/images/b.png'/> }

              </div>

            </div>
          </div>
        </div>


      <About height={height} width={width}/>
      </div>
  );
};

export default App;

