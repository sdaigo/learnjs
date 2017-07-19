describe('LearnJS', () => {
  it('Probrem Viewを表示できる', () => {
    learnjs.showView('#probrem-1');
    expect($('.view-container .probrem-view').length).toEqual(1);
  });
});
