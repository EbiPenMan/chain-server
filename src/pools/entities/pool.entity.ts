import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Pool {

  @PrimaryColumn({ type: "varchar", name: "address" })
  @ApiProperty({ example: "0xD94FeFc80a7d10d4708b140c7210569061a7eddb" })
  address: string;

  // @Column({ type: "varchar", name: "blockchain"})
  @PrimaryColumn({ type: "varchar", name: "blockchain" })
  @ApiProperty({ example: "bsc" })
  blockchain: string;

  // @Column({ type: "varchar", name: "network"})
  @PrimaryColumn({ type: "varchar", name: "network" })
  @ApiProperty({ example: "mainnet" })
  network: string;

  @Column({ type: "varchar", name: "dex"})
  @ApiProperty({ example: "pancakeswap" })
  dex: string;

  @Column({ type: "varchar", name: "token0Address"})
  @ApiProperty({ example: "0x4bd17003473389a42daf6a0a729f6fdb328bbbd7" })
  token0Address: string;

  @Column({ type: "varchar", name: "token1Address"})
  @ApiProperty({ example: "0x55d398326f99059ff775485246999027b3197955" })
  token1Address: string;
  
  @Column({ type: "varchar", name: "reserve0"})
  @ApiProperty({ example: "40346855030541299449933" })
  reserve0: string;
  
  @Column({ type: "varchar", name: "reserve1"})
  @ApiProperty({ example: "40346855030541299449933" })
  reserve1: string;
  
  @Column({ name: "blockTimestampLast"})
  @ApiProperty({ example: "40346855030541299449933" })
  blockTimestampLast: number
  
  @Column({  name: "updatedAt"})
  @ApiProperty({ example: "40346855030541299449933" })
  updatedAt: number;
  
  @Column({ type: "varchar", name: "interfaceType"})
  @ApiProperty({ example: "uniswap_v2" })
  interfaceType: string;
  
}
