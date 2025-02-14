export interface BlockHeader {
  [key: string]: any;
  hash: string;
  height: number;
  timestamp: string;
  version: number;
  weight: number;
  size: number;
  difficulty: number;
  confirmations: number;
  nonce: number;
  bits: number;
}

export interface Transaction {
  txid: string;
  version: number;
  locktime: number;
  vin: Array<Vin>;
  vout: Array<Vout>;
  size: number;
  weight: number;
  fee: number;
  is_coinbase: boolean;
  status: Status;
}

export interface Vin {
  txid: string;
  vout: number;
  prevout: Vout;
  scriptSig: string;
  scriptsig_asm: string;
  is_coinbase: boolean;
  sequence: number;
}

export interface Vout {
  scriptPubKey: string;
  scriptPubKey_asm: string;
  scriptPubKey_type: string;
  scriptPubKey_address: string;
  value: number;
}

export interface Status {
  confirmed: boolean;
  block_height: number;
  block_hash: string;
  block_time: number;
}

export interface Address {
    address: string;
    chain_stats: Chain_Stats;
}

export interface Chain_Stats {
    funded_txo_count: number;
    funded_txo_sum: number;
    spent_txo_count: number;
    spent_txo_sum: number;
    tx_count: number;
}
