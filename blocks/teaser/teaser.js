import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  // image
  const picture = block.querySelector('picture');
  if (picture) {
    const img = picture.querySelector('img');
    picture.replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }]));
    const imageDiv = block.querySelector('picture').closest('div');
    if (imageDiv) imageDiv.className = 'teaser-image';
  }

  // text / cta wrapper
  [...block.children].forEach((row) => {
    [...row.children].forEach((div) => {
      if (!div.classList.contains('teaser-image')) {
        div.className = 'teaser-body';
      }
    });
  });

  // style CTA link as button
  const cta = block.querySelector('.teaser-body a');
  if (cta) cta.classList.add('button');
}
