#!/usr/bin/env ruby
require 'net/http'
require 'json'

message_file = ARGV[0]
message      = File.read(message_file)
$regex       = /#(\d+)/

def get_issues
  uri = URI('https://api.github.com/repos/seuraul/calc-server/issues')
  JSON.parse(Net::HTTP.get(uri))
end

if $regex.match message

  number = message[/#(\d+)/]
  number = number[/(\d+)/]

  get_issues.each do |issue|
    # puts "NUMBER = #{number}"
    # puts "ISSUE NUMBER = #{issue['number']}"
    exit 0 if number == issue['number'].to_s
  end

  puts "[POLICY] BAD FORMATTED MESSAGE: ISSUE NUMBER DOES NOT EXIST"
  exit 1

else
  puts "[POLICY] BAD FORMATTED MESSAGE: NEEDS TO REFERENCE AN ISSUE"
  exit 1
end
