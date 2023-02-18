export default class NodeService {
  getTreeNodes () {
    return fetch('/api/notes/tree').then(res => res.json())
    .then(d => d);
  }
}