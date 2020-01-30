# Builds a json object using the note partial view.
# @note comes from the notes controller
json.partial! "api/notes/note", note: @note