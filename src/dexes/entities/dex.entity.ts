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

}
