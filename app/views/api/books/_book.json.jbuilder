# Builds a json object by extracting id, title, author and genre from a book
json.extract! book, :id, :title, :author, :genre, :uploader_id

notes = []

if logged_in?
    book.notes.map do |note| 
        if note.user_id == current_user.id
            notes << note.id
        else
            continue
        end
    end
end

json.notes notes