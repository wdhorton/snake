describe("View", function () {

  beforeEach(function () {
    var keydown = $.Event("keydown");
    keydown.keyCode = "N";
    spyEvent = spyOnEvent("html", keydown);
  });

  it("receives user input through keyboard", function () {
    $('html').trigger(keydown);

    expect(keydown).toHaveBeenTriggeredOn('html');
    expect(spyEvent).toHaveBeenTriggered();
  });
});
