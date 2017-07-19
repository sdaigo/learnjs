describe('LearnJS', () => {
  it('Problem Viewを表示できる', () => {
    learnjs.showView('#problem-1');
    expect($('.view-container .problem-view').length).toEqual(1);
  });

  it('ハッシュがなければLanding Pageを表示する', () => {
    learnjs.showView('');
    console.log($('.view-container .landing-view').length)
    expect($('.view-container .landing-view').length).toEqual(1);
  });

  it('View関数にViewパラメーターを渡す', () => {
    spyOn(learnjs, 'problemView');
    learnjs.showView('#problem-42');
    expect(learnjs.problemView).toHaveBeenCalledWith('42');
  });

  it('hash changeイベントをsubscribeする', () => {
    learnjs.appOnReady();
    spyOn(learnjs, 'showView');
    $(window).trigger('hashchange');
    expect(learnjs.showView).toHaveBeenCalledWith(window.location.hash);
  });

  describe('problem view', () => {
    it('問題番号を含むtitleを持つ', () => {
      var view = learnjs.problemView('1');
      expect(view.text()).toEqual('Problem #1 Coming Soon!');
    });
  });
});
