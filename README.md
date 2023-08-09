# lezer-traceql

TraceQL lezer grammar based on https://github.com/grafana/tempo/blob/main/pkg/traceql/expr.y.

## Installation

```
npm install
```

## Development
### Building

```
npm run build 
```

### Testing

```
npm test
```

### Tree visualizer

You can use the `tree-viz` tool in the `tools` folder to visually see the parser in action.



To use it, you need to have already [built the project](#building).

You also need to have a running HTTP server.
For instance, you can do that by opening a terminal at the root folder and running:
```bash
npx http-server
```
This should start a HTTP server at `http://127.0.0.1:8080`. You can now fetch the `tools/tree-viz.html` page from the HTTP server: open your browser and visit `http://localhost:8080/tools/tree-viz.html`.
![alt text](docs/tree-visualizer.png)
