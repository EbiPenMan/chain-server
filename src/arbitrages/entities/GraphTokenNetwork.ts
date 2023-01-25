import {Token} from "../../tokens/entities/token.entity";
import {Pool} from "../../pools/entities/pool.entity";

export default class GraphTokenNetwork {
    
    public nodes: NodeModel[];
    public edges: EdgeModel[];
    
    public AddNode(token: Token): NodeModel {
        let node = this.nodes.find(x => x.token == token);
        if (node == null) {
            node = new NodeModel(token);
            this.nodes.push(node)
        }
        return node;
    }
    
    public AddEdge(pool: Pool, weight: number): EdgeModel {
        let edge = this.edges.find(x => x.pool == pool);
        if (edge == null) {
            edge = new EdgeModel(pool, weight);
            this.edges.push(edge)
        }
        return edge;
    }
    
}

export class NodeModel {
    public token: Token;
    constructor(token: Token) {
        this.token = token;
    }
}

export class EdgeModel {
    public pool: Pool;
    public weight: number;
    
    constructor(pool: Pool, weight: number) {
        this.pool = pool;
        this.weight = weight;
    }
    
}
