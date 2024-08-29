import { type Node, type Edge, Position } from '@xyflow/svelte';
import Mu from './Mu.svelte';

export const nodeTypes = {
    'mu': Mu
};

const nodeDefaults = {
  sourcePosition: Position.Right,
  targetPosition: Position.Left
};

export const initialNodes: Node[] = [
  { id: 'A', position: { x: 0, y: 150 }, data: { label: 'A' }, ...nodeDefaults },
  { id: 'B', position: { x: 250, y: 0 }, data: { label: 'B' }, ...nodeDefaults },
  { id: 'C', position: { x: 250, y: 150 }, data: { label: 'C' }, ...nodeDefaults },
  { id: 'D', position: { x: 250, y: 300 }, data: { label: 'D' }, ...nodeDefaults }
];

export const initialEdges: Edge[] = [
  {
    id: 'a-b',
    source: 'A',
    target: 'B'
  },
  {
    id: 'a-c',
    source: 'A',
    target: 'C'
  },
  {
    id: 'a-d',
    source: 'A',
    target: 'D'
  }
];


// const nodes = writable<Node[]>([
//     {
//     id: 'mu', // required and needs to be a string
//     type: 'mu',
//     position: { x: 0, y: 0 }, // required
//     data: { color: writable('#ff4000') } // required
//     },
//     {
//     id: 'hello',
//     position: { x: -100, y: 120 },
//     data: { label: 'Hello world' }
//     },
//     {
//     id: 'A',
//     type: 'group',
//     data: {},
//     position: { x: 150, y: 0 },
//     style: 'width: 170px; height: 140px;'
//     },
//     {
//     id: 'A-1',
//     type: 'input',
//     data: { label: 'child 1' },
//     position: { x: 10, y: 10 },
//     parentId: 'A',
//     extent: 'parent'
//     },
//     {
//     id: 'A-2',
//     data: { label: 'child 2' },
//     position: { x: 10, y: 90 },
//     parentId: 'A',
//     extent: 'parent'
//     },
//     {
//     id: 'B',
//     type: 'output',
//     position: { x: 50, y: 200 },
//     data: { label: 'node b' }
//     },
//     {
//     id: 'C',
//     type: 'output',
//     position: { x: 250, y: 200 },
//     data: { label: 'node c' }
//     }
// ]);

// const edges = writable<Edge[]>([
//     { id: 'mu-hello', source: 'mu', target: 'hello', animated: true },
//     { id: 'a1-a2', source: 'A-1', target: 'A-2' },
//     { id: 'a2-b', source: 'A-2', target: 'B' },
//     { id: 'a2-c', source: 'A-2', target: 'C' }
// ]);