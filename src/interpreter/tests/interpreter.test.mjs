import * as fs from 'fs';

import {Interpreter} from '../dist/index.js'


class TextContent {
  constructor(name,file) {
    this.name = name;
    this.readAll = () => {
      return fs.readFileSync(file, 'utf8');
    }
  }
}

describe("interpreter", function() {
  it('interpret', function () {
    let interpreter = new Interpreter();
    let sequence = interpreter.parseEvents(new TextContent("bla", "tests/files/interpreter_test.piece"), null ,null)
    expect(sequence.endTime).toEqual(750);
    expect(sequence.events.length).toEqual(2);
    expect(sequence.events[0].startTimeMs).toBeCloseTo(0);
    expect(sequence.events[0].durationMs).toBeCloseTo(250);
    expect(sequence.events[1].startTimeMs).toBeCloseTo(250);
    expect(sequence.events[1].durationMs).toBeCloseTo(500);
  });
});
