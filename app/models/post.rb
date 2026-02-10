class Post < ApplicationRecord
  validates :title, :body, presence: true

  scope :published, -> { where.not(published_at: nil).where("published_at <= ?", Time.current) }
  scope :draft, -> { where(published_at: nil) }

  def published?
    published_at.present? && published_at <= Time.current
  end
end
