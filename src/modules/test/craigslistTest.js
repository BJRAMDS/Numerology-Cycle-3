const { CraigslistModule } = require('../craigslistModule.js');
const assert = require('assert');


// Begin test suite
console.log('🔍 Starting CraigslistModule Test Suite...');

function testAddURL() {
    const mod = new CraigslistModule();
    mod.addURL('https://craigslist.org/example1', { posted: '2025-05-07', category: 'jobs' });
    const list = mod.listURLs();

    assert.strictEqual(list.length, 1);
    assert.strictEqual(list[0].url, 'https://craigslist.org/example1');
    assert.strictEqual(list[0].metadata.category, 'jobs');
    console.log('✅ testAddURL passed.');
}

function testMultipleAdditions() {
    const mod = new CraigslistModule();
    mod.addURL('https://craigslist.org/1');
    mod.addURL('https://craigslist.org/2');
    mod.addURL('https://craigslist.org/3');
    const list = mod.listURLs();

    assert.strictEqual(list.length, 3);
    assert.strictEqual(list[2].url, 'https://craigslist.org/3');
    console.log('✅ testMultipleAdditions passed.');
}

function testRemoveHead() {
    const mod = new CraigslistModule();
    mod.addURL('https://craigslist.org/1');
    mod.addURL('https://craigslist.org/2');
    const removed = mod.removeURL('https://craigslist.org/1');
    const list = mod.listURLs();

    assert.strictEqual(removed, true);
    assert.strictEqual(list.length, 1);
    assert.strictEqual(list[0].url, 'https://craigslist.org/2');
    console.log('✅ testRemoveHead passed.');
}

function testRemoveMiddle() {
    const mod = new CraigslistModule();
    mod.addURL('https://craigslist.org/1');
    mod.addURL('https://craigslist.org/2');
    mod.addURL('https://craigslist.org/3');
    const removed = mod.removeURL('https://craigslist.org/2');
    const list = mod.listURLs();

    assert.strictEqual(removed, true);
    assert.strictEqual(list.length, 2);
    assert.strictEqual(list[1].url, 'https://craigslist.org/3');
    console.log('✅ testRemoveMiddle passed.');
}

function testRemoveNonExistent() {
    const mod = new CraigslistModule();
    mod.addURL('https://craigslist.org/1');
    const removed = mod.removeURL('https://craigslist.org/999');

    assert.strictEqual(removed, false);
    assert.strictEqual(mod.listURLs().length, 1);
    console.log('✅ testRemoveNonExistent passed.');
}

function testEmptyList() {
    const mod = new CraigslistModule();
    const list = mod.listURLs();

    assert.deepStrictEqual(list, []);
    console.log('✅ testEmptyList passed.');
}

function testMetadataIntegrity() {
    const metadata = { posted: '2025-05-07', category: 'gigs', tags: ['local', 'manual'] };
    const mod = new CraigslistModule();
    mod.addURL('https://craigslist.org/meta', metadata);
    const result = mod.listURLs()[0];

    assert.deepStrictEqual(result.metadata, metadata);
    console.log('✅ testMetadataIntegrity passed.');
}

// Run all tests
[
    testAddURL,
    testMultipleAdditions,
    testRemoveHead,
    testRemoveMiddle,
    testRemoveNonExistent,
    testEmptyList,
    testMetadataIntegrity
].forEach(fn => fn());

console.log('🎉 All CraigslistModule tests passed successfully!');
