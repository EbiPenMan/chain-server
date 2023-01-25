import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Dex {
  @PrimaryColumn({ type: "varchar", name: "blockchain" })
  @ApiProperty({ example: "bsc" })
  blockchain: string;

  @PrimaryColumn({ type: "varchar", name: "network" })
  @ApiProperty({ example: "mainnet" })
  network: string;

  @PrimaryColumn({ type: "varchar", name: "name" })
  @ApiProperty({ example: "pancakeswap" })
  name: string;
  
  @Column({ type: "varchar", name: "router_v2"})
  @ApiProperty({ example: "0x10ED43C718714eb63d5aA57B78B54704E256024E" })
  router_v2: string;
  
  @Column({ type: "varchar", name: "factory_v2"})
  @ApiProperty({ example: "0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73" })
  factory_v2: string;
  
  

}
