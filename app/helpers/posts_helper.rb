module PostsHelper
  def render_markdown(text)
    return "" if text.blank?

    html = Commonmarker.to_html(
        text,
        options: {
          parse: {
            smart: true
          },
          extension: {
            strikethrough: true,
            table: true,
            autolink: true
          }
        },
      )
    sanitize(html)
  end
end
