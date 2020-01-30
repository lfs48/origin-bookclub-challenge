# Builds a json object from a collection of notes. 
# Each key is the id of a note, and the value is a json object built using the note partial view.
# @notes comes from the users controller
@notes.each do |note|
    json.set! note.id do
        json.partial! "api/notes/note", note: note
    end
end