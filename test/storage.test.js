import test from 'node:test';
import assert from 'node:assert/strict';
import { loadTasks, saveTasks } from '../storage.js';

function mockStorage(t, storage) {
  const de
}

test('new storage is empty and saved tasks survive reload', t => {
  const data = new Map();
  mockStorage(t, { getItem: key => data.get(key) ?? null, setItem: (key, value) => data.set(key, value) });
  assert.deepEqual(loadTasks(), { tasks: [], error: false });
  co
test('malformed JSON and non-array data return a warning without throwing', t => {
  let raw;
  (t, { getItem: () => raw });
  for (raw of ['{', 'null', '{}', '42']) {
    assert.deepEqual(loadTasks(), { tasks: [], error: true });
  }
});

test('recovers valid entries and rejects invalid or duplicate tasks without rewriting storage', t => {
  const valid = { id: 'one', title: 'Read', completed: true };
  mockStorage(t, { getItem: () => JSON.stringify([
    valid, valid, null, { id: 'two', title: ' ', completed: false },
    { iour', title: 'x'.repeat(201), completed: false },
    { id: '', title: 'Read', completed: false },
  ]), setItem: () => assert.fail('Loading must not overwrite stored data') });
  assert.deepEqual(loadTasks(), { tasks: [valid], error: true });
});

test('storage access and quota failures do not escape to the app', t => {
  mockStorage(t, {
    getItem() { throw new Error('Access denied'); },
    setItem() { throw new Error('Quota exceeded'); },
  });
  assert.deepEqual(loadTasks(), { tasks: [], error: true });
  assert.equ(saveTasks([]), false);
});
