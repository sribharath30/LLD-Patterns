Requirements 

        - create an event
        - add guests to the event
        - schedule events on different dates(recurrence);


Database schema 

User table:
    name: string;
    email: string;
    id: string; --> primary key;

Events table:
    id: string;
    authorId: string-->(reference from User Table)
    description: string;
    startTime: Date;
    endTime: Date;
    isRecurring: boolean;
    allDay: boolean;
    recurrenceId: string(reference from recurence table);
    recurrenceType: ENUM RecurrenceType;


GuestEvent Association Table

    guestId: string;
    eventId: string;
    status: ENUM meetingStatus

Recurrence Table 

    id: string;
    EventId: string(reference from event table);
    isWeekly: boolean;
    isDaily: boolean;
    isMonthly: boolean;
    recursAfter: Date;
    recurrenceStartsAt: Date;
    recurrenceEndsAt: Date;
    repeatsOn: string;

Actor - User 

USER :

    name: string;
    email: string;
    id: string;

    -- below will have the getters and setters --
Events:

    id: string;
    authorId: string(reference from user)
    description: string;
    startTime: Date;
    endTime: Date;
    isRecurring: boolean;

    -- below will have all the getters and setters --

ENUM RecurrenceType{
    Daily
    Monthly
    Weekly
}

ENUM meetingStatus{
    Accepted 
    Rejected
    Waiting
}

EventManager:

    EventsRepository: Stored in a DB
    UserRespository: Stored in a DB
    GuestEventsAssociationRepository:

    methods:
    # createEvent(name,userID);
    # AddGuests(List<userIds/participants>)
    # updateEvent(Event)
    # deleteEvent(Event)
    # updateMeetingStatus(Guest user)

ENUM RecurrenceEnds{
    Never
    On
    After
}

RecurrenceManager:
    Event event;
    EndsAt: ENUM RecurrenceEnds

    #createRecurringEvents(Event,EndsAt);
    #updateRecurrence(Event,)
