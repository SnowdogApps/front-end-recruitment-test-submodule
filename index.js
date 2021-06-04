module.exports = function(View) {
  View.registerTemplate('snowdog/bacon', {
    template: `
      <main>
        <div>
          <section>
            <button type="button">
                Yeah, I want more bacon!
            </button>
          </section>

          <section>
            <img src="{{ img }}" alt="Beautiful slices of fried bacon">
          </section>
        </div>
      </main>
    `,
  })
}
