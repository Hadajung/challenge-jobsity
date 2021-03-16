import {cleanHTML} from './ShowDetailScreen';

it('given html structured string, cleanHtml() returns clean string', (done) => {
  const htmlText = '<p>I am a master</p>';
  expect(cleanHTML(htmlText)).toBe('I am a master');

  done();
});
